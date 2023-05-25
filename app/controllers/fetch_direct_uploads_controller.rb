# frozen_string_literal: true

# Creates a new blob on the server side in anticipation of a direct-to-service upload from the client side.
# When the client-side upload is completed, the signed_blob_id can be submitted as part of the form to reference
# the blob that was created up front.
class FetchDirectUploadsController < ActiveStorage::BaseController
  def create
    blob = create_blob
    render_blob(blob)
  end

  private

  def create_blob
    blob_args = {
      filename: blob_params[:file].original_filename,
      byte_size: blob_params[:file].size,
      checksum:,
      content_type: blob_params[:file].content_type
    }

    blob = ActiveStorage::Blob.create_before_direct_upload!(**blob_args)
    blob.upload(blob_params[:file].tempfile, identify: false)

    blob
  end

  def checksum
    file = blob_params[:file].tempfile
    Digest::MD5.file(file).base64digest
  end

  def render_blob(blob)
    @blob = blob
    respond_to do |format|
      format.js
    end
  end

  def blob_params
    params.permit(:file)
  end
end
